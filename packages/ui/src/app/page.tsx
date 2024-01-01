'use client'
import React from 'react';

import { useQuery , gql } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function App() {
  const limit = 5;
  const query = gql`
            query my_data($id:Int){
            profies(where:{id:{_eq :$id}}){
              id 
              name
              }}`;
      
  const { loading, error, data } = useQuery(query , {variables:{id:2}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const q = data  
  console.log(q.profies)

  return (
    <div>{JSON.stringify(q.profies)}</div>
  )
}



