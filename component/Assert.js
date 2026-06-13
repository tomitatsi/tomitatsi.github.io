/**
 * Assert を管理する
 */

/**
 * 動的な Assert を行う\
 * condition が true の場合、Error(message) を抽出する
 * @param {condition} condition 条件式
 * @param {string=} message 条件式が true だった場合のメッセージ
 */
export default function assert(condition, message)
{
  if (condition)
  {
    throw new Error(message ?? "");
  }
}