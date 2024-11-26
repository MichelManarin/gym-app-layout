export default interface metricResponse {
  period: string; 
  calories: {
    consumed: number; 
    burned: number;   
  };
  steps: number;       
  sleep: string;       
  workout: string;     
  meditation: string;  
}