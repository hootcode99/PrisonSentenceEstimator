import { between } from 'utils.js'

export default function getdrugABTableValue(score) {
  let sentence = null

  if (between(score, 84, 103)) {
    sentence = 
    {
      Total: {
        low: 24,
        mid: 45,
        high: 65,
      }, 

      Split: {
        low: 8,
        mid: 18,
        high: 27,
      }
    };

  } else if (between(score, 104, 140)) {
    sentence = 
    {
      Total: {
        low: 24,
        mid: 61,
        high: 97,
      }, 

      Split: {
        low: 8,
        mid: 18,
        high: 27,
      }
    };

  } else if (between(score, 141, 152)) {
    sentence = 
    {
      Total: {
        low: 24,
        mid: 64,
        high: 104,
      }, 
  
      Split: {
        low: 8,
        mid: 18,
        high: 27,
      }
    };

  } else if (between(score, 154, 176)) {
    sentence = 
    {
      Total: {
        low: 36,
        mid: 70,
        high: 104,
      }, 
  
      Split: {
        low: 12,
        mid: 20,
        high: 27,
      }
    };

  } else if (between(score, 177, 178)) {
    sentence = 
    {
      Total: {
        low: 36,
        mid: 70,
        high: 104,
      }, 
  
      Split: {
        low: 12,
        mid: 24,
        high: 36,
      }
    };
    
  } else if (between(score, 181, 185)) {
    sentence = 
    {
      Total: {
        low: 45,
        mid: 87,
        high: 130,
      }, 
  
      Split: {
        low: 16,
        mid: 26,
        high: 36,
      }
    };

  } else if (between(score, 188, 242)) {
    sentence = 
    {
      Total: {
        low: 45,
        mid: 87,
        high: 130,
      }, 
  
      Split: {
        low: 24,
        mid: 30,
        high: 36,
      }
    };

  } else if (between(score, 250, 255)) {
    sentence = 
    {
      Total: {
        low: 50,
        mid: 90,
        high: 130,
      }, 
  
      Split: {
        low: 24,
        mid: 30,
        high: 36,
      }
    };

  } else if (between(score, 258, 270)) {
    sentence = 
    {
      Total: {
        low: 60,
        mid: 95,
        high: 130,
      }, 
  
      Split: {
        low: 24,
        mid: 30,
        high: 36,
      }
    };

  } else if (between(score, 276, 280)) {
    sentence = 
    {
      Total: {
        low: 70,
        mid: 100,
        high: 130,
      }, 
  
      Split: {
        low: 24,
        mid: 30,
        high: 36,
      }
    };

  } else if (between(score, 286, 315)) {
    sentence = 
    {
      Total: {
        low: 120,
        mid: 150,
        high: 180,
      }, 
  
      Split: {
        low: 24,
        mid: 30,
        high: 36,
      }
    };

  } else if (between(score, 286, 315)) {
    sentence = 
    {
      Total: {
        low: 180,
        mid: 210,
        high: 240,
      }, 
  
      Split: {
        low: 36,
        mid: 48,
        high: 60,
      }
    };
  }

  return sentence;
}
