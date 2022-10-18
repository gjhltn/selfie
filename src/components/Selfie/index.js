import React from 'react';
import { Octokit, App } from "octokit";

const octokit = new Octokit({ });

const saveSelfie = async () => {
 // async (dispatch) => {
    alert("get")
    try {
        const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
          owner: "octocat",
          repo: "Spoon-Knife",
          per_page: 2,
        });
      
        console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)
      
      } catch (error) {
        console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
    //  } 
    
  }}
  /*
const  = async () => {
    async (dispatch) => {
    try {
        const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
          owner: "octocat",
          repo: "Spoon-Knife",
          per_page: 2,
        });
      
        console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)
      
      } catch (error) {
        console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
      } 
    }
} */

export const Selfie = ()=> {

    
    return(
    <div>
        <button onClick={()=>saveSelfie()}>Save</button>
</div>
    )
}
