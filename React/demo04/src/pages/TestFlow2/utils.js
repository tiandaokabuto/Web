import { LoopItem } from './ItemConstantTags';

/**
 * 找出id所对应的那一个层级的结点的数组
 * 传入的参数是全部的结点数组 和 当前结点的id
 */
export const findCurrentLevelNode = (nodes, ids, depth = 1) => {
  // console.log(nodes, ids, depth);
  // 查找完全 直接返回当前的level
  if (ids.length === depth) return nodes.children || nodes;
  return findCurrentLevelNode(
    nodes.find(item => '' + item.id === ids.slice(0, depth).join('-')).children,
    ids,
    depth + 1
  );
};

export const findNodeLevelById = (cards, id, isTail) => {
  const find = cards.find(item => item.id === id);
  if (find) {
    if (isTail) {
      return find.children;
    }
    return cards;
  }
  for (let i = 0; i < cards.length; i++) {
    let flag = false;
    if (cards[i].children) {
      flag = findNodeLevelById(cards[i].children, id, isTail);
    }
    if (flag) return flag;
  }
};

/**
 * 判断当前结点是否是正在拖拽结点的子结点
 * @param {*} node
 * @param {*} id
 */

export const isChildrenNode = (parent, child) => {
  return (
    parent.children && child && findNodeLevelById(parent.children, child.id)
  );
};

/**
 * 复用已有的结点结构生成新的结点
 */

export const useNode = (node, id) => {
  delete node['effectTag'];
  delete node['type'];
  node.children = node.$$typeof & LoopItem ? [] : undefined;
  node.id = id;
  return node;
};

/**
 * 转换ids数组
 */

export const transformIds = id => {
  return String(id)
    .split('-')
    .filter(item => item !== 'tail')
    .join('-');
};
