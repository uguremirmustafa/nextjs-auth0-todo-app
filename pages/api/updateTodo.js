/** @format */

import { table, getMinifiedRecord } from './utils/Airtable';

export default async (req, res) => {
  const { id, fields } = req.body;
  try {
    const updatedRecords = await table.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong' });
  }
};
