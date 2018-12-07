As of now we can not claim the accuracy of any of the calcuations done in this program.

Members: Nicki Manis, Jaden Drury, Brevin Wittmer

To Build The Project:

1: Install Node.js, you can get it here https://nodejs.org/en/ 

2: Open a terminal and move into the 'finalproject' directory of the files.

3: Run the npm install command

4: After the npm install command finishes running run the command npm start

5: After running the command a window should open in your default browser with the main page of the app.

To enable testing:

1: Open the app.js file in a text editor. On or around line 185 there will be a tag for <ReactTest /> or in full

    <ReactTest playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} intelligence={this.state.intelligence} constitution={this.state.constitution} wisdom={this.state.wisdom} dexterity={this.state.dexterity} charisma={this.state.charisma}/>
    
Comment out this line to disable testing, and uncomment it to enable testing.
A graphical case of whether tests are passing or failing displays in the same browser window that opens when you run the npm start command. 

2: The file where tests are located is in the testRender directory.


