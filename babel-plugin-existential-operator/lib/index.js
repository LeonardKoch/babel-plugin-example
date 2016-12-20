'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            BinaryExpression: function BinaryExpression(path) {
                if (path.node.operator !== "^") {
                    return;
                }

                var rightName = path.node.right.name;

                path.replaceWith(t.callExpression(t.arrowFunctionExpression([t.identifier('left')], t.conditionalExpression(t.logicalExpression('&&', t.logicalExpression('&&', t.binaryExpression('!==', t.identifier('left'), t.nullLiteral()), t.binaryExpression('===', t.unaryExpression('typeof', t.identifier('left')), t.stringLiteral('object'))), t.binaryExpression('in', t.stringLiteral(rightName), t.identifier('left'))), t.memberExpression(t.identifier('left'), t.identifier(rightName)), t.identifier('undefined'))), [path.node.left]));
            }
        }
    };
};
