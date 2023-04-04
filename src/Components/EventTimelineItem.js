import React from 'react'
import "./style/Eventtimeline.css";

export default function EventTimelineItem(props) {
    let {BlueTitle,EventDate,BlueTime,BlueContent, RedTitle,RedTime,RedContent,GreenTitle,GreenTime,GreenContent}=props;
  return (
    <div>
      <div className="container blur_background">
    <div className="h1 text-center text-dark" id='subHeading'>{EventDate}</div>
		<article className="postcard light blue">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt="" />

			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue">{BlueTitle}</h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>{BlueTime}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{BlueContent}</div>
			  <button type="button" className="btn btn-outline-primary">Register</button>
			</div>
		</article>
		<article className="postcard light red">
				<img className="postcard__img" src="https://picsum.photos/501/500" alt="" />	
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red">{RedTitle}</h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>{RedTime}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{RedContent}</div>
        <div className="container d-flex justify-content-end"><button type="button" className="btn btn-outline-danger">Register</button></div>
			</div>
		</article>
		<article className="postcard light green">
				<img className="postcard__img" src="https://picsum.photos/500/501" alt="" />
			<div className="postcard__text t-dark">
				<h1 className="postcard__title green">{GreenTitle}</h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>{GreenTime}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{GreenContent}</div>
        <button type="button" className="btn btn-outline-success">Register</button>
      </div>
		</article>

    </div>
    </div>
  )
}
