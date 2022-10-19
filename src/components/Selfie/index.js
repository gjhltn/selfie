import React, {useState} from 'react';
import { Octokit } from "@octokit/rest"
import { Base64 }from "js-base64"
import styled from "styled-components";

const OWNER = "gswirrl"
const REPO = "selfie"
    const PATH  = "config.md"



const Wrapper = styled.div`
  margin:20rem;
  padding: 3rem;
  border: 5px solid black;
`

const saveSelfie = async (token) => {

   

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


    try {

      const octokit = new Octokit({
        auth: token,
        })

        const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {
          owner: OWNER,
          repo: REPO,
          file_path:PATH
        });

      const content = "hello world " + dateTime
   const contentEncoded = Base64.encode(content);
   const { data } = await octokit.repos.createOrUpdateFileContents({
  
     owner: OWNER,
     repo: REPO,
           path: PATH,
           sha: sha,
      message: "feat: Added programatically",
     content: contentEncoded,
      committer: {
        name: `Octokit Bot`,
        email: "guy@swirrl.com",
     },
      author: {
       name: "Octokit Bot",
       email: "guy@swirrl.com",
      },
   });

    console.log(data);
    alert(data ? "successs" : "error")


      } catch (error) {
        console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
        alert( "error " + error.status)
    
  }}

export const Selfie = ()=> {
  const [token,setToken] = useState("")
  return(
    <Wrapper>
      <input type='password'
       name='password' 
       id='password'
       value={token}
       onChange={(e)=>setToken(e.target.value)}
 /><br/>
        <button onClick={()=>saveSelfie(token)}>Save</button>
	</Wrapper>)
}