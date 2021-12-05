const PushToMentoring = async (router): Promise<void> => {
  await router.push("#mentoria");
  await router.replace("/");
};

export default PushToMentoring;
