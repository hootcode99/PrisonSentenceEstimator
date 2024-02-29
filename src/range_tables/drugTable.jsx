import { between } from '../utils.jsx';

export function getdrugABTableValue(score) {
  let sentence = {
    Straight: {
      low: 0,
      mid: 0,
      high: 0,
    }, 

    Split: {
      low: 0,
      mid: 0,
      high: 0,
    }
  };

  if (between(score, 84, 103)) {
    sentence = 
    {
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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

  } else if (between(score, 320, 381) || score > 381) {
    sentence = 
    {
      Straight: {
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

export function getdrugCTableValue(score) {
  let sentence = {
    Straight: {
      low: 0,
      mid: 0,
      high: 0,
    }, 

    Split: {
      low: 0,
      mid: 0,
      high: 0,
    }
  };

  if (between(score, 71, 74)) {
    sentence = 
    {
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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
      Straight: {
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

  } else if (between(score, 188, 248) || score > 248) {
    sentence = 
    {
      Straight: {
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