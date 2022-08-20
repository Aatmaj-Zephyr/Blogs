---
templateKey: blog-post
title: Python Automation Workshop
date: 2019-08-20T12:33:31.974Z
author: CodeCell - Bhuvnesh, Tejas
description: A workshop to commence an era of automated tasks
featuredpost: false
featuredimage: /img/pythonatuomationbanner.png
tags:
  - python
  - automation
---

![](/img/pythonatuomationbanner.png)

<!--StartFragment-->

**Automation** being at the heart of **[KJSCE Codecell](http://kjscecodecell.com/)**, a workshop on the same topic was inevitable. What better way to start a year! Automation is important in the software world because it reduces human effort, improves productivity and quality while decreasing human error.

Various libraries like BeautifulSoup, Selenium, requests, CSV, SMTPlib, PIL, etc. make python favorable for writing scripts for automating various repetitive tasks. There is also an added fun to automation since it allows you to fool around with your friends by spamming their emails and freaking them out.

To demonstrate how effective and practical automation is, we employed it in the actual registration process for our workshop to draw attention to how cool and interesting automation actually is. We made our own website that employed the skills of automation.

> automate.kjscecodecell.com was an example of how the registration process can be done without any human intervention.

<!--EndFragment-->

![Automate with Python](/img/pic-2.png)

<!--StartFragment-->

The system was such that the attendee had to go to the registration website where a terminal was displayed in which all the important details were to be entered. On successful registration, an automated mail was sent to the attendee along with a generated pass and details of the workshop. This entire process was automated without any human intervention (except for writing the code and removing bugs). People were intrigued by these features and we believe it led to an increase in registrations. Soon, we had more than 200 registrants from our college as well as from colleges all across Mumbai.

All paths are filled with obstacles and for us, with the weather on the day of action being the biggest. Our workshop was scheduled to start on 27th July at 10 am and on that very day, it was pouring heavily since morning and an orange alert was declared throughout Mumbai. Calls started pouring in and we had no choice but to postpone the workshop. The CodeCell team was very reluctant to take this decision and we were deeply saddened by it. But the safety of our participants and team members was most important so it had to be done.

The workshop was postponed to Saturday, 3rd August. Registrations were also reopened. A few who had registered before dropped out but we still had a good number of participants. The team was in good spirits. We were going to come back stronger this time.

On 3rd August too, the weather was not our closest friend. It was just as bad as (if not worse than) the Saturday before. But the CodeCell team took the tough decision to go ahead with the workshop, because finding another date seemed unlikely and because we were doing it for the people and it just felt right. In spite of the heavy rains and transportation problems, around 70 people attended our workshop. While the number was much less than the people who had originally registered, the team was still delighted by this response and we were determined to do our best. We were grateful to all enthusiasts who braved the harsh weather that day to attend our workshop.

The workflow of the workshop was the process of registration itself. We had a similar registration process during our last Bootcamp a few months back and the participants were very curious about how it was implemented and hence we decided on this workflow as the participants had also been through this process and would really have the wow effect after actually understanding the entire working of the system.

<!--EndFragment-->

![Workshop in progress](/img/pic-3.jpeg "Workshop in progress in the lab B215")

<!--StartFragment-->

We first introduced the entire workflow of what we were going to do that day and explained to them the importance of automating every task and why various modules were required.

The workshop flow consisted of the following topics:

1. Web scraping using beautiful soup
2. Interacting with files and folders (CSV format)
3. Templating
4. Working with images and PDF (PIL)
5. Emailing using SMTPLIB
6. Cronjobs

The participants were initially acquainted with Ubuntu and working with the terminal etc. they were made to install the python packages like pip(python package installer). For scraping, python’s BeautifulSoup and requests libraries were introduced. Different concepts of HTML like divisions classes, id and different types of requests like GET and POST were briefly explained. The hierarchical structure created using the soup object was explained. Thus after a proper understanding of the task, we commenced by scraping a [website](http://scrape.kjscecodecell.com/) made by us with details(name, dob, email, phone no., city, payment) of a few people that was updated at regular intervals using cronjob. Hence, the first module was finished.

The details scraped from the website had to be stored in a structured format such as CSV, JSON, XML, etc. We began with the second module which consisted of working and handling of CSV(Comma-separated values) files. They were first taught the importance of structured format and how it helps to increase our efficiency they were made to use the built-in “CSV” library of python. Then some sample data was given to read and write the data from CSV files. After getting acquainted with the CSV library they converted the scraped details into CSV file. Thus module 2 was done.

Thus two modules were covered and a lunch break was given.

We resumed with the workshop after a short break beginning with Templating (Jinja2). Jinja 2, a templating engine was introduced to the participants which consisted of the syntax of how it will help in our task with the help of various examples. Jinja was required for templating the content in the emails that were going to be sent. Thus the templating concept was included in our task after a fruitful 45 mins experience by exploring the conditional and looping statements.

PIL (python imaging library) is a python library used for editing images and posters. Thus, with understanding PIL we began with the next module. It was rather a short module as compared to others as it included the basic standard things of how to draw and write on images using PIL. The passes generated for each participant that was sent via emails were generated using PIL.

The final task involved sending mail to the registered people the participants were made familiar with MIME (Multipurpose Internet Mail Extension) which is a python library used for formatting the content of the mail that included the template created by Jinja and the pass generated using PIL. This formatted content of the email needed to be sent. The SMTP protocol was taught which is used for sending these emails. Thus, the script was written by the participants for formatting the content and sending the emails using MIME and SMTP.

Since this was for learning and testing purposes we used YOPmail. It provides a number of disposable email ids. It’s always a good practice to find such testing services before actually deploying it on a large scale.

One final script was written by the participants that connected all modules with each other. Thus, all the modules were connected and the process was concluded.

<!--EndFragment-->

![](/img/pic-4.jpeg)

<!--StartFragment-->

In the evening, we reached one last and a small part of the workshop i.e Cronjobs. Cronjobs are used to schedule tasks thus we can schedule the mails sent to registered people in the tasks using it after a certain fixed amount of time

Cron has a very unique format of date-time for scheduling tasks. Hence, the script that connected all the modules was scheduled using Cron.

Thus with cronjobs, all the different modules were covered and the codes corresponding to different modules were combined and the task was completed.

We saw enthusiastic participation from all the attendees throughout the 6-hour workshop. At the end of the workshop, a test was conducted on all the topics covered in the workshop. All participants scoring 8 and above would get a certificate indicating successful completion of the workshop. Feedbacks are the true face of any workshop and we here at CodeCell are always open for it as improvement is always possible through constructive criticism.

> “CodeCell Members planned it pretty well” — Attendee
>
> “It was much easy to understand and communicate with the students who were as tutor.” — Attendee

The participants were made familiar with the CodeCell council, what we do, and were given a brief idea of all the different events and workshops conducted by the council throughout the year.

We were very satisfied and glad about the response and feedback received by the participants.

A big thanks to the entire team of CodeCell who worked hard to make it happen. Thank you very much.

You can know more about the codes taught in the workshop [here](https://github.com/kjsce-codecell/Python-Automation/).

And for you readers, thanks a lot for reading, we have many more workshops and competitions lined up for the year.

Follow us on [Instagram](https://www.instagram.com/kjsce_codecell/?hl=en) and [Facebook](https://www.facebook.com/kjscecodecell/) to get updated.

<!--EndFragment-->
