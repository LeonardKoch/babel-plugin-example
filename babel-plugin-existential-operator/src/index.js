export default function ({types: t}) {
    return {
        visitor: {
            BinaryExpression(path) {
                if(path.node.operator !== "^") {
                    return
                }

              	const rightName = path.node.right.name;

                path.replaceWith(
                    t.callExpression(
                        t.arrowFunctionExpression(
                            [t.identifier('left')],
                            t.conditionalExpression(
                                t.logicalExpression(
                                    '&&',
                                    t.logicalExpression(
                                        '&&',
                                        t.binaryExpression(
                                            '!==',
                                            t.identifier('left'),
                                            t.nullLiteral()
                                        ),
                                 	    t.binaryExpression(
                                            '===',
                                            t.unaryExpression('typeof', t.identifier('left')),
                                            t.stringLiteral('object')
                                        )
                                    ),
                                    t.binaryExpression(
                                    	'in',
                                      	t.stringLiteral(rightName),
                                  		t.identifier('left')
                                    )
                                ),
                                t.memberExpression(
                                    t.identifier('left'),
                                    t.identifier(rightName)
                                ),
                              	t.identifier('undefined')
                            )
                        ),
                      	[path.node.left]
                    )
                )
            }
        }
    }
}