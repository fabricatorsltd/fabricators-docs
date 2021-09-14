---
id: workflow
---

# Workflows
These are a set of rules, like a recipe, that define when and how your feeds
should be published in your channels.

Any workflow has a timer, which defines when the workflow should be run.

## Timers
Each user can see differents available timers, according to its plan.

| Timer | Description | Plan |
|-------|-------------|------|
| 1 min | Every minute | HERO |
| 5 min | Every 5 minutes | PRO |
| 15 min | Every 15 minutes | PRO |
| 30 min | Every 30 minutes | FREE |
| 12 hours | Every 12 hours | FREE |
| 1 day | Every day | FREE |

We can also provide custom timers, [contact us](/docs/intro#support) for a quote.

### How timers work
Timers are the frequency of which the workflow will be run. E.g. if you want to
run the workflow every 5 minutes (the suggested one), you will have to set the
5 minutes timer. feedler will execute your workflow every 5 minutes, looking
for new posts in your feeds and will publish them in the channels you have
defined in the workflow. 

Timers are also used to determinate if a post should be published or not.

## Add a new workflow
To add a workflow to your feedler account, you need to go to the [workflows](https://feedler.net/workflows) page,
then click on the **+** icon on the toolbar on top of the page, this will pop up
a wizard with 4 steps (Channels, Feeds, Template, Settings).

### Feeds
Here you can select the feeds where feedler will check for new posts. Can be
one or more feeds.

![Feeds](/img/feedler/workflow-feeds.png)

### Channels
Here you can select the channels where feedler will publish new posts. Can be
one or more channels.

![Channels](/img/feedler/workflow-channels.png)

### Template
This is one of the most important steps, here you can define the template
that will be used to generate the post in the channel. You can also use some
variables to customize the template:

| Variable | Description |
|----------|-------------|
| `{{feed.name}}` | feed name (the profile name on social feeds) |
| `{{post.title}}` | the post title |
| `{{post.short}}` | first 250 characters of the post |
| `{{post.url}}` | post permalink. Supported options: `button`, `title` |
| <code>{{post.url&#124;button}}</code> | will display a button with the post url and title (on compatible channels, otherwise it will display the post url) |
| <code>{{post.url&#124;button[title:Read more]}}</code> | will display a button with the post url and a custom title (on compatible channels, otherwise it will display the post url) |

You can also choose a predefined template from the dropdown menu. Also toggle
the **Send media** option to send the post with the media attached (if any).

### Settings
Here you can define the workflow settings, like the timer, its status (enabled)
and choose the timer on which the workflow should be run.

![Settings](/img/feedler/workflow-settings.png)

Once you filled all the steps, click on the **Save new workflow** button to 
save and activate the workflow. It will immediately go into action.
