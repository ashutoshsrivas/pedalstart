'use client';
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import MyDrawer from "../components/MyDrawer";
import { Task } from "@mui/icons-material";
import TaskListContainer from "../components/TaskListContainer";
import AddTask from "../components/AddTask";
import { api } from "@/Global";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import SharedTaskListContainer from "../components/SharedTaskListContainer";

const page = () => {
  const router = useRouter();
  const [userState] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);


  const getTasks = async () => {
    try {
      console.log(user);
      
      axios.get(api + `colab/gettasks/${user.email}/`).then((res) => {
        setTasks(res.data);
        // console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const loadTasks = async (email) => {
    try {
      console.log(api + `colab/gettasks/${email}/`);
      
      axios.get(api + `colab/gettasks/${email}/`).then((res) => {
        setTasks(res.data);
        // console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = async () => {
    if (userState) {
      setUser(userState);
      await loadTasks(userState.email);
      setIsLoading(false);
    } else {
      router.push("/sign-in");
    }
  };

  useEffect(() => {

    checkUser();
  },[]);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.push("/sign-in");
    } catch (e) {
      console.error(e);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>
  }
  else {
    return (
      <>
        <MyDrawer title={'Shared Task'}>
          <SharedTaskListContainer refresh={getTasks} user={user} rows={tasks} />
        </MyDrawer>

      </>
    )
  }
}

export default page