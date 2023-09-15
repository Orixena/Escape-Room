export type TQuest ={
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax:number[];
};

export type TDetailedQuest = {
  description: string;
  coverImg: string;
  coverImgWebp: string;
} & TQuest;
