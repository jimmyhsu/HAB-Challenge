HAB-Challenge
==============

**The Primary Challenge**<br>
Develop image detection capability that allows the user to draw a boundry around a HAB and have the application suggest a color of the HAB based on a pre-defined color palette.

**The Secondary Challenge**<br>
Develop a mobile application that:


* Has a Social Login component.
* Asks the users questions specified in the requirements document.
* Leverages the weather.gov and Water Quality Portal API.
* Submits data to an email address.


HAB-Challenge, Detailed
--------------

*The Primary Challenge (Challenge Number 1)*

The focus of the Primary Challenge is to develop a color detecting function that could be built into the app. The following describes criteria that color detector should meet in order to satisfy the challenge:

1. Capture image of HAB
2. Automatically draw boundary around the bloom or provide option for users to manually draw boundary of bloom 
3. Ask questions: 
  * Do you notice any color in the water column?
  * Can you see surface scum (an accumulation at surface) or algae floating near the water surface? Algae floating at the surface and looks like grass clippings, green cottage cheese, or spilled paint.
    * If users answer Yes, they must specify: Has the surface scum impacted recreational use of the water body?
4. Utilize color recognition to match color from captured image to a color library  (see below)
5. Make suggestion of bloom color based on match:
  * Ask if suggested color is correct, if not provide dropdown
  * Color Library: Green, Blue, Red, Rust, Brown, Milky white, Purple, Black

*The Secondary Challenge (Challenge Number 2)*

The following describes criteria and functionality that the app should meet in order to satisfy the Secondary Challenge:
The mobile app should….

1. Inform users of the personal information accessed or transmitted by the app and how that information is used, stored, secured, disclosed, etc.
2. Provide users with option of logging into app using their social media accounts such as Facebook, Google+, etc. to populate personal information (name, email). Otherwise allow users to manually enter personal information (name, email, title, phone, organization)
3. Inform users that the app requires access to their location
4. Automatically generate a time and date stamp once the image is taken and the report is created
5. Present users with a map that shows the users location and allow users to correct location if GPS is unavailable or location is incorrect
6. Append the following weather condition fields to the submission in the background using the weather.gov API: 
  * currrentobservation
    * temp
    * dewp
    * relh
    * winds
    * wind
    * gust
    * weather
    * windchill
    * **state (can be used to populated additional information about the location of the user)**
7. Automatically generate geographic information about the bloom location. Info to include:
  * Name of the water body 
  * City, County, State that the water body exist in
8. Present users with series of questions about the observed HABs. Request answers for the following questions:
  * What is the location of the bloom in the water body?
  * Is the bloom near a drinking water source?
  * Is the bloom near a publicly owned lake?
  * Is the bloom near a public beach? If yes, what is the name of the beach?
  * What is the estimate size (sq.feet) or the extent of the bloom?
    * Integrate a square footage calculator. (e.g. http://www.squarefootage.org/square-footage-calculator.php)
  * To your knowledge, is the bloom near a drinking water intake?
    * Provide Yes, No, and Unknown as dropdown options
    * If users answer Yes, they must specify the known water system
  * Were samples taken?
    * Provide Yes or No as dropdown options
    * If users answer Yes, they must specify: What type of samples? Where were the samples sent for analysis?
9. Allow users to Save report and continue at a later time before submission. (View draft submission area) 
10. Allow the users to review the report before submitting their observations
11. Allow the users to see their past submissions. (View past submission area).
12. Submit data as PDF to a specify email address and/ or to National Geographic FieldScope project
13. Append the following Water Quality Portal fields to the submission in the background: 
  * Coordinates (LAT/LONG) 
  * ProviderName
  * MonitoringLocationIdentifier
  * ResolvedMonitoringLocationTypeName
14. Be open source and easily brandable. Code should be made available on github.
15. Functionality to detect redundant reports that are submitted at the same location during the same day within a defined radius.
