## Description

Simple package used to generate a [Discord snowflake](https://discord.com/developers/docs/reference#snowflakes) from a Javascript Date.

## Installation

Use the following command to install this package

    npm install date-to-discord-snowflake

## Usage

    import generate from 'date-to-discord-snowflake';

    // Define a date
    const today = new Date();

    // Generate snowflake
    const snowflake = generate(today);

The generated snowflake can then be used with Discord API's `/messages/search` endpoint or any other related endpoints that use `min_id`, `max_id`, or similar params.
