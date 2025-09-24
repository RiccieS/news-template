CMS.registerEventListener({
  name: 'preSave',
  handler: async ({ entry }) => {
    // Set the 'edit' field to true
    let editResult = await entry.get('data').set('edit', true);
     
     // Return the updated entry data
     return editResult;
  },
});

const handlePostEvent = async (eventName, { entry }) => {
  console.log(`${eventName} entry data:`, JSON.stringify(entry.get('data'), null, 2));

  // Make a POST request to local server to run the script
  try {
    const response = await fetch('http://localhost:3000/run-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({ entry: entry.get('data') }), // Send data to the page
    });

    if (!response.ok) {
      throw new Error('Failed to run script');
    }

    const result = await response.text();
    console.log('Script result:', result);
  } catch (error) {
    console.error(`Error running script on ${eventName}:`, error);
  }
};

CMS.registerEventListener({
  name: 'postPublish',
  handler: (event) => handlePostEvent('Published', event),
});

CMS.registerEventListener({
  name: 'postUnpublish',
  handler: (event) => handlePostEvent('Unpublished', event),
});