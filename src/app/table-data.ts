export interface TableData {
  id: number;
  name: string;
  demographicExposure: {
    group: string; 
    percentage: number;
  }[];
  actualExposure: number;    
  totalPossibleExposure: number;     
}

export interface SelectData {
  id: number;
  name: string;
}