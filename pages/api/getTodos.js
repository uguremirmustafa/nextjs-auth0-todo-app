/** @format */

import { table, minifiedRecords, minifyRecords } from './utils/Airtable';

export default async (req, res) => {
  try {
    const records = await table.select({}).firstPage();
    const minifiedRecords = await minifyRecords(records);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong' });
  }
};
