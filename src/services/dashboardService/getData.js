export const getData = async () => {
    try {
      const response = await fetch('/assets/dashboard/data.json');
      const data = await response.json();
      return data;
    }
     catch (error) {
      console.error('Error fetching JSON data:', error);
      throw error;
    }
  };
  