"use client";

import { useState, MouseEvent } from "react";

import WelcomePopup from "./component/WelcomePopup";
import AuthModal from "./component/AuthModal";
import MainContent from "./component/MainContent";

import './style.css';

export default function Page() {
  let [welcomeModalOpen, setWelcomeModalOpen] = useState<boolean>(true);
  let [authModalOpen, setAuthModalOpen] = useState<boolean>(false)

  let closeWelcomeModal = (e:MouseEvent):void => {
    if ((e.target as Element).classList.contains('remove')){
      setWelcomeModalOpen(false)
    }
  }

  let showAuthModal = ():void => {
    setAuthModalOpen(true)
  }
  let closeModal = (e:MouseEvent):void => {
    if ((e.target as Element).classList.contains('remove')){
      setAuthModalOpen(false)
    }
  }
  
    return (
      <div>
        {
          welcomeModalOpen &&
          <WelcomePopup 
            closeWelcomeModal={closeWelcomeModal} 
            showAuthModal={showAuthModal}
          />
        }

        {
          authModalOpen &&
          <AuthModal closeModal={closeModal} />
        }
        
        <MainContent showAuthModal={showAuthModal}/>
      </div>
    )
}