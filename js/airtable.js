const AIRTABLE_PAT = 'patap6Duxb9WAQDz5.fcba236c56eee9b8cab1cd9365cb4a9c1e8fef9e32124613332d73d7b019f350';
const BASE_ID = 'app2Jrt1yk2MisSqo';
const TABLE_ID = 'tbl31F7EhBfNxD3EI';

async function fetchAirtableData() {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`
      }
    });

    if (!response.ok) {
      throw new Error(`Airtable request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.records;

  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return [];
  }
}
