HAB-Challenge2
==============

The Secondary Challenge
The following describes criteria and functionalities that the app should meet in order to satisfy the Secondary Challenge:
The mobile app should….
1.	Inform users of the personal information accessed or transmitted by the app and how that information is used, stored, secured, disclosed, etc.
2.	Provide users with option of logging into app using their social media accounts such as Facebook, Google+, etc. to populate personal information (name, email). Otherwise allow users to manually enter personal information (name, email, title, phone, organization)
3.	Inform users that the app requires access to their location
4.	Automatically generate a time and date stamp once the image is taken and the report is created
5.	Present users with a map that shows the users location and allow users to correct location if GPS is unavailable or location is incorrect
6.	Append the following weather condition fields to the submission in the background using the weather.gov API: 

•	currrentobservation
o	temp
o	dewp
o	relh
o	winds
o	wind
o	gust
o	weather
o	windchill
o	state (can be used to populated additional information about the location of the user) 

See Data & Service documentation for additional information

7.	Automatically generate geographic information about the bloom location. Info to include: 
•	Name of the water body 
•	City, County, State that the water body exist in
8.	Present users with series of questions about the observed HABs. Request answers for the following questions:
•	What is the location of the bloom in the water body?
•	Is the bloom near drinking water source?
•	Is the bloom near publicly owned lake?
•	Is the bloom near a public beach? If yes, what is the name of the beach?
•	What is the estimate size (sq.feet) or the extent of the bloom?
o	Integrate a square footage calculator. (e.g. http://www.squarefootage.org/square-footage-calculator.php)
•	To your knowledge, is the bloom near a drinking water intake?
o	Provide Yes, No, and Unknown as dropdown options
o	If users answer Yes, they must specify the known water system
•	Were samples taken?
o	Provide Yes or No as dropdown options
o	If users answer Yes, they must specify: What type of samples? Where were the samples sent for analysis?

9.	Allow users to Save report and continue at a later time before submission. (View draft submission area) 
10.	Allow the users to review the report before submitting their observations
11.	Allow the users to see their past submissions. (View past submission area).
12.	Submit data as PDF to a specify email address and/ or to National Geographic FieldScope project
13.	Append the following Water Quality Portal fields to the submission in the background: 

•	Coordinates (LAT/LONG) 
•	ProviderName
•	MonitoringLocationIdentifier
•	ResolvedMonitoringLocationTypeName
See Data & Service documentation for additional information
14.	Be open source and easily brandable. Code should be made available on github.
