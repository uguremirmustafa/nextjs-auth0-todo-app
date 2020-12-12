/** @format */

import { table, minifiedRecords, minifyRecords } from './utils/Airtable';
import auth0 from './utils/auth0';

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = auth0.getSession(req);
  console.log(user);
  try {
    const records = await table
      .select({
        filterByFormula: `userId = '${user.sub}'`,
      })
      .firstPage();
    const minifiedRecords = await minifyRecords(records);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong' });
  }
});
