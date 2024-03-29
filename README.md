# Air Quality Measurements Project

Live example: https://mm-air-quality.netlify.app/

This project is to look at air quality readings from across the United States from the past few weeks. Users can filter by type of measurement - community, research or government. Clicking any dot on the map will load specific measurement data.

![Screenshot of app](https://github.com/kittywizard/air-quality/blob/c809c203ac308c11fdf7d8d1e1a33d33851b3bd3/screenshot.PNG)

## Known Issues/Bugs
- Research entity filter is not working.
  - May be an API loading issue (i.e. React is rendering too fast?)
  - Turned off for now.
- Radio buttons are not showing as active, but are working. Started after attempt to create custom radio buttons.

(check to see if this is still relevant to above bug)
- Research filter will not load specific data.
  - Potentially slow API call? Need loading screen.
  - Check API call itself.

## Future Additions 
- Filter measurement data in a more meaningful, visual way.
- Allow user to select date range to pull in data.
- UI updates including: custom radio buttons that work, better filtering options.
- Add unit tests (ensure API works in all the various situations - would fix current bugs)
- Refactor and organize code, separating out functions into own files. 
