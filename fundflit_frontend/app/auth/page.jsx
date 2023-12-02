"use client"

import { useState } from "react";

const Auth = () => {

  const [didToVerify, setDidToVerify] = useState('');
  const [did, setDid] = useState('');

  // verify user's did
  const verifyDid = () => {
    setDidToVerify('')
    console.log(didToVerify);
  };

  // generate user's did
  const handleDidBtn = async () => {
    if (did.length !== 0) {
      try {
        await navigator.clipboard.writeText(did)
    } catch (e) {
        console.error('e', e)
    }
      console.log("DID copied:", did);
    } else {
        setDid('loading');

        // Here the actual logic that would generate the DID will go here
        // the setDid() will be given the value of did generated

      setTimeout(() => {
        setDid('nhjuyrredcyjikkiuyhgfdescg7ujhytr678653256788');      
      console.log("DID generated");
    }, 2000);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-Black"> 
        <div
        className="bg-white text-Black shadow-md md:w-1/3 sm:w-3/5 w-3/4 h-fit mx-auto rounded-md p-[2rem] flex flex-col">
        
        <div className="flex flex-col items-center">
          <label htmlFor="didInput" className="mb-2 md:text-lg text-xl font-semibold">
            Verify your DID
          </label>
          <input
            id="didInput"
            type="text"
            className="w-full md:text-lg text-xl py-2 px-4 border border-Black rounded focus:outline-none"
            value={didToVerify}
            onChange={(e) => setDidToVerify(e.target.value)}
          />
          <button
          className="shadow-inner font-semibold bg-Green  text-Black py-2 px-6 my-5 rounded w-fit hover:bg-opacity-50 focus:outline-none"
         onClick={verifyDid}>
          Enter
        </button>
        </div>

        <hr />

        <div className="flex flex-col items-center">
          <p className="my-4 md:text-lg text-xl font-semibold">Don't have a DID?</p>
          <button
            className={`shadow-inner bg-Black text-white py-2 px-6 rounded font-normal focus:outline-none hover:text-Black ${
                did === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={handleDidBtn}
            disabled={did === 'loading'}>
            {did.length === 0 ? "Generate DID" : did === "loading" ? "Loading..." : "Copy DID"}
          </button>
        </div>
      </div>
        
    </main>
  )
}

export default Auth;