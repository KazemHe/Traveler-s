function load(key: string): any {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  }
  
  function remove(key: string): void {
    localStorage.removeItem(key);
  }
  
  function store(key: string, val: any): void {
    localStorage[key] = JSON.stringify(val);
  }
  
  export const storageService = {
    load,
    store,
    remove,
  };
  