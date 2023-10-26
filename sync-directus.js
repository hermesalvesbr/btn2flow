import fetch from "cross-fetch";

const BASE_DIRECTUS_URL = "http://localhost:8057";
const BASE_ACCESS_TOKEN = "lD6cYhKWkFxpB-hloOoAZaLPrWCAXtTR";

const TARGET_DIRECTUS_URL = "https://cidadet.vega.softagon.io";
const TARGET_ACCESS_TOKEN = "q2sMS1ceW73AsuJEwulxIv1ANB1jf0Yr";

async function main() {
  try {
    const snapshot = await getSnapshot();
    const diff = await getDiff(snapshot);
    await applyDiff(diff);
  } catch (error) {
    console.error(error);
  }
}

main();

async function getSnapshot() {
  try {
    const URL = `${BASE_DIRECTUS_URL}/schema/snapshot?access_token=${BASE_ACCESS_TOKEN}&force=true`;
    const { data } = await fetch(URL).then((r) => r.json());
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getDiff(snapshot) {
  const URL = `${TARGET_DIRECTUS_URL}/schema/diff?access_token=${TARGET_ACCESS_TOKEN}&force=true`;

  try {
    const { data } = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(snapshot),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function applyDiff(diff) {
  const URL = `${TARGET_DIRECTUS_URL}/schema/apply?access_token=${TARGET_ACCESS_TOKEN}&force=true`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(diff),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Server response:", data);
  } catch (error) {
    console.error(error);
  }
}
