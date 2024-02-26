import { between } from 'utils.js'

export default function getdrugCTableValue(score) {
  let sentence = null

  if (between(score, 71, 74)) {
    sentence = 
    {
      Total: {
        low: 13,
        mid: 23,
        high: 32,
      }, 

      Split: {
        low: 6,
        mid: 12,
        high: 18,
      }
    };

  } else if (between(score, 76, 77)) {
    sentence = 
    {
      Total: {
        low: 13,
        mid: 39,
        high: 65,
      }, 

      Split: {
        low: 6,
        mid: 12,
        high: 18,
      }
    };

  } else if (between(score, 78, 79)) {
    sentence = 
    {
      Total: {
        low: 13,
        mid: 39,
        high: 65,
      }, 
  
      Split: {
        low: 6,
        mid: 15,
        high: 24,
      }
    };

  } else if (between(score, 80, 103)) {
    sentence = 
    {
      Total: {
        low: 13,
        mid: 39,
        high: 65,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };

  } else if (score == 104) {
    sentence = 
    {
      Total: {
        low: 13,
        mid: 55,
        high: 97,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };
    
  } else if (between(score, 105, 125)) {
    sentence = 
    {
      Total: {
        low: 15,
        mid: 56,
        high: 97,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };

  } else if (between(score, 126, 140)) {
    sentence = 
    {
      Total: {
        low: 18,
        mid: 58,
        high: 97,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };

  } else if (between(score, 141, 147)) {
    sentence = 
    {
      Total: {
        low: 21,
        mid: 62,
        high: 104,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };

  } else if (between(score, 148, 152)) {
    sentence = 
    {
      Total: {
        low: 24,
        mid: 64,
        high: 104,
      }, 
  
      Split: {
        low: 8,
        mid: 16,
        high: 24,
      }
    };

  } else if (between(score, 154, 171)) {
    sentence = 
    {
      Total: {
        low: 30,
        mid: 67,
        high: 104,
      }, 
  
      Split: {
        low: 12,
        mid: 18,
        high: 24,
      }
    };

  } else if (between(score, 172, 178)) {
    sentence = 
    {
      Total: {
        low: 36,
        mid: 70,
        high: 104,
      }, 
  
      Split: {
        low: 12,
        mid: 18,
        high: 24,
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
        mid: 20,
        high: 24,
      }
    };

  } else if (between(score, 188, 248)) {
    sentence = 
    {
      Total: {
        low: 45,
        mid: 87,
        high: 130,
      }, 
  
      Split: {
        low: 18,
        mid: 21,
        high: 24,
      }
    };
  }

  return sentence;
}