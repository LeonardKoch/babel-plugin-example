window.existential = (obj, prop) => (obj !== null && typeof obj === "object" && prop in obj ? obj.b : undefined))

export default function ({types: t}) {
    return {
        visitor: {
            BinaryExpression(path) {
                if(path.node.operator !== "^") {
                    return
                }

              	const rightName = path.node.right.name;

                path.replaceWith(
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('window'),
                                t.identifier('existential')
                            ),
                            [path.node.left, t.stringLiteral(rightName)]
                        )
                    )
                )
            }
        }
    }
}