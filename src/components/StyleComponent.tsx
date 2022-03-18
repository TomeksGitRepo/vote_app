import React from 'react'
import './StyleComponent.css'
import {Link} from 'react-router-dom'

function StyleComponent(props: any) {

  return (
    <>
      <div className="my_container">
        <div className="my_item">
          <div>
            <h2>Kilka słów</h2>
            <h4>Kilka słów</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Link className="btn blue" to="/votes">
              Zobacz więcej
            </Link>
          </div>
        </div>
        <div className="my_item">
          <img
            src="https://media.istockphoto.com/photos/businessman-using-tablet-at-night-time-picture-id654100004"
            alt="test"
          />
        </div>
      </div>
      <div className="my_container">
        <div className="my_item">
          <img
            src="https://media.istockphoto.com/photos/businessman-using-tablet-at-night-time-picture-id654100004"
            alt="test"
          />{" "}
        </div>
        <div className="my_item">
          <div>
            <h2>Kilka słów</h2>
            <h4>Kilka słów</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Link className="btn blue" to="/votes">
              Zobacz więcej
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default StyleComponent;