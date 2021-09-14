---
id: get
title: Get
---

The Get command is used to request informations about a Telegram account such as User Id, if it's a bot, its Trust 
Factor, etc.

## Permissions

All administrators in your group and unified/ban operators can perform this command.

> The bot will respond with more or less details based on the user's permissions.

## Syntax

You can use `/get` in two ways. One permits you to get info when replying to a message:

```bash
/get (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert a username as the command value:

```bash
/get @username
```

The message output will be like this:

```bash
[Report]

Requested information:

Chat Id: numbers

User Id: numbers
Username: @Username
Is bot: False (or True)

Trust factor: TF/100 

Is blacklisted: no ✅ (or yes)
```

## For developers

This command is defined in the file `/Bot/Command/Get.cs`.
