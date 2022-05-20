export const updateObject = (oldObject, updatedPropertice) => {
    return {
      ...oldObject,
      ...updatedPropertice,
    };
  };