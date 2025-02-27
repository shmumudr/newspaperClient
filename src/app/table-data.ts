export interface TableData {
  id: number;
  name: string;
  demographicExposure: {
    group: string; // לדוגמה: "גברים אורתודוקסיים מעל גיל 30" או "נשים"
    percentage: number; // אחוז החשיפה לקבוצה זו
  }[];
  actualExposure: number; // מספר הנחשפים בפועל
  totalPossibleExposure: number; // סך החשיפה האפשרי (500,000)
}

export interface SelectData {
  id: number;
  name: string;
}