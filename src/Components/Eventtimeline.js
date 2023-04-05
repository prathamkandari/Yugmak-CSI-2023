import * as React from 'react';
import "./style/Eventtimeline.css";
import EventTimelineItem from './EventTimelineItem';
import { element } from 'prop-types';


export default function Eventtimeline() {
  const arrData=([{
    "eventDate":"13 April",
    "titleBlue":"FIFA-23",
    "timeBlue":"Mon, May 25th 2020",
     "contentBlue":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleRed":"FIFA-23",
    "timeRed":"Mon, May 25th 2020",
     "contentRed":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleGreen":"FIFA-23",
    "timeGreen":"Mon, May 25th 2020",
     "contentGreen":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
  },{
    "eventDate":"14 April",
    "titleBlue":"FIFA-23",
    "timeBlue":"Mon, May 25th 2020",
     "contentBlue":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleRed":"FIFA-23",
    "timeRed":"Mon, May 25th 2020",
     "contentRed":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleGreen":"FIFA-23",
    "timeGreen":"Mon, May 25th 2020",
     "contentGreen":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
  },{
    "eventDate":"15 April",
    "titleBlue":"FIFA-23",
    "timeBlue":"Mon, May 25th 2020",
     "contentBlue":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleRed":"FIFA-23",
    "timeRed":"Mon, May 25th 2020",
     "contentRed":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
    "titleGreen":"FIFA-23",
    "timeGreen":"Mon, May 25th 2020",
     "contentGreen":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis nam fugit repellat officia provident id. Delec",
  }])
  return (
    <div>
      <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">Events Schedule</div>
    {console.log(arrData)}
    {arrData.map((element)=>{
      return     <EventTimelineItem BlueTitle={element.titleBlue} EventDate={element.eventDate} BlueTime={element.timeBlue} BlueContent={element.contentBlue} 
      RedTitle={element.titleRed} RedTime={element.timeRed} RedContent={element.contentRed} 
      GreenTitle={element.titleGreen} GreenTime={element.timeGreen} GreenContent={element.contentGreen}
      />
    })}
	</div>
</section>
    </div>
  );
}
