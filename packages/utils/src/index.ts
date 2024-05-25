import React from 'react';

export { default as cn } from './cn';

export function getNodeText(node: React.ReactNode): string {
    if (['string', 'number'].includes(typeof node)) return node as string;
    if (node instanceof Array) return node.map(getNodeText).join('');
    if (typeof node === 'object' && node && 'props' in node) {
        return getNodeText(node.props.children);
    }

    return '';
}
