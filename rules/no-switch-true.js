module.exports = {
  create(context) {
    return {
      SwitchStatement(node) {
        if (node.discriminant.value === true) {
          context.report(node, 'Switch test must not be "true"');
        }
      }
    };
  }
};
