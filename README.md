# Slack Links Site Generator

If you’ve ever used Slack, or any messaging app for that matter, you might have experienced the following problem: People will share interesting links, but as time goes on it all gets lost in oblivion. On top of this, there’s a mixture of text, comments, and emojis that make it harder to find links that you’re searching for. This tool aims to help solve this problem!

**Example result:** https://slack-links.vercel.app/

Keep reading to learn how to create a site like this for yourself!

## How Does This Work?

This project was bootstrapped with Create React App, and uses both Python and React Bootstrap. Here's how it works, in general:

- You need to manually export data from your slack organization
- Run the python script in here to generate a json file with the links and clean image thumbnails (see instructions below)
- See all the links shown in the React site (the fun part), so you never lose track of links again!
- To update the links, just run the script in here again (see instructions below)

Note: This project is very careful to avoid extracting any actual message text, internal files, etc., as this would be a problem! It only extracts publicly available links which are safe to display on a generated site.

## Instructions to Generate Your Own Slack Links Site

1. Fork this repo. Also, make sure you have Python on your machine.
2. Manually export data from your Slack organization. It will come in the form of a zip file. When you unzip this, it will be a folder of folders, each of those folders corresponding to a channel (e.g., if the Slack organization has a channel called #random, you will see a folder called random). Within each of those folders there will be a bunch of json files. Here's an example!

<p align="center">
<img width="562" alt="Screen Shot 2022-11-30 at 10 18 56 AM" src="https://user-images.githubusercontent.com/26422030/204847804-88d25d6f-53da-48db-8c28-01137f486cf1.png">
</p>

3. Pick the channel folder with messages you want to extract links from (e.g., random). Copy and paste this entire channel folder to the data folder in your cloned repo: slack-links/src/data. (e.g., if the folder is called random, you should see it sitting right next to get_slack_links.py).

<p align="center">
<img width="562" alt="Screen Shot 2022-11-30 at 10 18 56 AM" src="https://user-images.githubusercontent.com/26422030/204848424-1adcbf52-7ec4-4c21-bbaa-ba27835c6798.png">
</p>

4. In your command line, move into the location slack-links/src/data and then run `python3 get_slack_links.py` (assuming you're using Python3). When prompted, enter the exact name of the folder you dragged into the data folder (e.g., if the folder is called random, then enter `random`). This will generate a new current_links.json file for you.

<p align="center">
<img width="562" alt="Screen Shot 2022-11-30 at 10 18 56 AM" src="https://user-images.githubusercontent.com/26422030/204848539-e513f38e-ea33-4db9-8277-a64876ccdaff.png">
</p>

5. IMPORTANT: delete the channel folder you dragged into the data folder (.e.g., remove the random folder). This way all that data won’t be exposed to the public!

<p align="center">
<img width="562" alt="Screen Shot 2022-11-30 at 10 18 56 AM" src="https://user-images.githubusercontent.com/26422030/204848980-eccff7f8-5ba2-43b4-8a49-4cd6646da33b.png">
</p>

<p align="center">
<img width="562" alt="Screen Shot 2022-11-30 at 10 18 56 AM" src="https://user-images.githubusercontent.com/26422030/204850359-eb755fcf-6abd-479e-b721-3ac622b9ae1e.png">
</p>

6. In your command line, move into the top of the repo (slack-links) and then run the app with the following:
- `npm i`
- `npm start`
7. Woohoo! You should see all the links in the React app.
8. Ready to deploy this site? I recommended using Vercel.
9. Want to update with more links? Follow steps 3-5 again (especially step 5!). The current_links.json file will automatically update with existing and new links combined.  

Run into any issues? Feel free to reach out to me: benjackscheer@gmail.com
