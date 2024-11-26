import React from "react";
import challengeResponse from "../services/dto/challenge";

export default interface AppContextType {
  userHeight: number;
  setUserHeight: React.Dispatch<React.SetStateAction<number>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  metric: any; 
  setMetric: React.Dispatch<React.SetStateAction<any>>;
  challenges: challengeResponse[] | undefined;
  setChallenges: React.Dispatch<React.SetStateAction<challengeResponse[] | undefined>>;
}

