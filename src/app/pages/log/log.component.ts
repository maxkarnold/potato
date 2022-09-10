import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  activities = [
    {tooltip: 'Pee', text: '💦', value: 'pee'},
    {tooltip: 'Poo', text: '💩', value: 'poo'},
    {tooltip: 'Accident Pee', text: '😡💦', value: 'accident_pee'},
    {tooltip: 'Accident Poo', text: '😡💩', value: 'accident_poo'},
    {tooltip: 'Walk', text: '🐕', value: 'walk'},
    {tooltip: 'Food', text: '🍲', value: 'food'},
    {tooltip: 'Training', text: '🦴', value: 'training'},
    {tooltip: 'Other', text: '❔', value: 'other'}
  ];
  tooltipOptions = {
    'hideDelay': 0,
    'placement': 'bottom',
    'tooltipClass': 'tooltip_class'
  };
  constructor() { }

  ngOnInit(): void {
    // loadLogEntries()
  }

}

// Selectors

// const logForm = document.querySelector(".log_form");

// const logDate = document.querySelector("form .log_date");
// const logTime = document.querySelector("form .log_time");
// const logActivity = document.querySelector("form .log_activity");
// const logComment = document.querySelector("form .log_comment");

// const logArray = [logDate, logTime, logActivity, logComment];

// const logButton = document.querySelector(".log_button");
// const logContainer = document.querySelector(".log_container");
// const logList = document.querySelector(".log_list");

// function loadLogEntries() {
// 	// Create log entry container and items
// 	let logDiv = document.createElement("div");
// 	let date = document.createElement("li");
// 	let time = document.createElement("li");
// 	let activity = document.createElement("li");
// 	let comment = document.createElement("li");

// 	logDiv.classList.add("log_entry");

// 	// converting date

// 	let rawDate = doc.data().datetime.toDate().toDateString();
// 	let rawMonth = rawDate.slice(4, 7);
// 	switch (rawMonth) {
// 		case "Jan":
// 			rawMonth = "1";
// 			break;
// 		case "Feb":
// 			rawMonth = "2";
// 			break;
// 		case "Mar":
// 			rawMonth = "3";
// 			break;
// 		case "Apr":
// 			rawMonth = "4";
// 			break;
// 		case "May":
// 			rawMonth = "5";
// 			break;
// 		case "Jun":
// 			rawMonth = "6";
// 			break;
// 		case "Jul":
// 			rawMonth = "7";
// 			break;
// 		case "Aug":
// 			rawMonth = "8";
// 			break;
// 		case "Sep":
// 			rawMonth = "9";
// 			break;
// 		case "Oct":
// 			rawMonth = "10";
// 			break;
// 		case "Nov":
// 			rawMonth = "11";
// 			break;
// 		case "Dec":
// 			rawMonth = "12";
// 			break;
// 		default:
// 			console.log(
// 				"Something went wrong while loading the date for the log entries"
// 			);
// 			break;
// 	}

// 	let rawDay = rawDate.slice(8, 10);
// 	let rawYear = rawDate.slice(13, 15);

// 	date.textContent = `${rawMonth}/${rawDay}/${rawYear}`;
// 	date.className = "log_date";

// 	// converting time

// 	let rawTime = doc.data().datetime.toDate().toLocaleTimeString();
// 	if (rawTime.slice(1, 2) === ":") {
// 		time.textContent = `${rawTime.slice(0, 4)} ${rawTime.slice(8, 10)}`;
// 	} else {
// 		time.textContent = `${rawTime.slice(0, 5)} ${rawTime.slice(9, 11)}`;
// 	}
// 	time.className = "log_time";

// 	// activity

// 	if (doc.data().activity !== "") {
// 		// removing underscores from activity text (NEED TO FIND A BETTER WAY)
// 		let rawActivity = doc.data().activity.split("_");
// 		if (rawActivity.length < 3) {
// 			text = rawActivity[0] + " " + rawActivity[1];
// 		} else {
// 			text = rawActivity[0] + " " + rawActivity[1] + " " + rawActivity[2];
// 		}

// 		// adding text
// 		activity.textContent = text;
// 		activity.className = "log_activity";
// 	}

// 	// optional comment
// 	if (doc.data().comment !== "") {
// 		comment.textContent = doc.data().comment;
// 		comment.className = "log_comment";
// 	}

// 	// Create Trash Button
// 	const trashButton = document.createElement("button");
// 	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
// 	trashButton.classList.add("trash_btn");

// 	// append items
// 	let logElements = [date, time, activity, comment, trashButton];

// 	logElements.forEach((element) => {
// 		if (element.textContent !== "") {
// 			logDiv.appendChild(element);
// 		} else if (element.className === "trash_btn") {
// 			logDiv.appendChild(element);
// 		}
// 	});

// 	// Append to List
// 	logList.insertBefore(logDiv, logList.firstChild);

// 	// DELETING DATA
// 	trashButton.addEventListener("click", (e) => {
// 		e.stopPropagation();
// 		let id = e.target.parentElement.getAttribute("data-id");
// 		if (loginStatus === true) {
// 			db.collection("log").doc(id).delete();
// 		} else {
// 			alert("Must be logged in to delete entry!");
// 		}
// 	});
// }
