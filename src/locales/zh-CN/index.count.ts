import localeValues from './index';

// 计算对象中所有类型为 string 的值，并存入数组
function getStringValues(obj: Record<string, any>): string[] {
  const stringValues: string[] = [];

  function recurse(currentObj: any) {
    // eslint-disable-next-line
    for (const key in currentObj) {
      if (typeof currentObj[key] === 'string') {
        stringValues.push(currentObj[key]);
      } else if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
        recurse(currentObj[key]);
      }
    }
  }

  recurse(obj);
  return stringValues;
}

// 计算对象中所有类型为 string 的唯一值，并存入数组
function getUniqueStringValues(obj: Record<string, any>): string[] {
  const stringValuesSet: Set<string> = new Set();

  function recurse(currentObj: any) {
    // eslint-disable-next-line
    for (const key in currentObj) {
      if (typeof currentObj[key] === 'string') {
        stringValuesSet.add(currentObj[key]);
      } else if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
        recurse(currentObj[key]);
      }
    }
  }

  recurse(obj);
  return Array.from(stringValuesSet);
}

export const getLanguageCount = () => {
  const stringValues = getStringValues(localeValues);
  const stringValuesLength = stringValues.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);
  console.log('String values:', stringValues, stringValuesLength);

  const uniqueStringValues = getUniqueStringValues(localeValues);
  const uniqueStringValuesLength = uniqueStringValues.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);
  console.log('Unique string values:', uniqueStringValues, uniqueStringValuesLength);
};

getLanguageCount();
