/** @format */

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import styles from '../styles/Home.module.css';
import { table, minifyRecords } from './api/utils/Airtable';
import { TodosContext } from '../contexts/TodosContext';
import { useEffect, useContext } from 'react';
import auth0 from './api/utils/auth0';
import TodoForm from '../components/TodoForm';

export default function Home({ initialTodos, user }) {
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    setTodos(initialTodos);
  }, []);
  console.log(user);
  return (
    <div>
      <Head>
        <title>Todo Authenticated App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <main>
        {user && (
          <>
            <TodoForm />
            <ul>{todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}</ul>
          </>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
        user: session?.user || null,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: 'something went wrong',
      },
    };
  }
}
