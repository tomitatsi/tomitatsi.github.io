/**
 * 事前構築可能な Element を管理
 */
import assert from "./Assert.js";

/**
 * Element オブジェクトを各種 profile と同時に生成する
 * @param {string} tag タグ
 * @param {string=} innerText innerText
 * @param {Element=} parentElement 親エレメント
 * @param {[string, string]=} attributeArray 属性名をキーとし、値をバリューとする属性連想配列
 * @returns {Element} 生成された Element オブジェクト
 */
export default function CreateElementWithProfile(tag, innerText, parentElement, attributeArray)
{
  assert(tag === undefined, "tag are undefined");
  assert(tag === null, "tag are null");
  assert(tag === "", "tag are Empty");

  // element 作成
  const element = document.createElement(tag);

  // innerText が引数として渡されている場合、element の innerText を設定する
  if (innerText !== undefined)
  {
    element.innerText = innerText;
  }

  // parentElement が引数として渡されている場合、element の親を parentElement にする
  if (parentElement !== undefined)
  {
    parentElement.append(element);
  }

  // attribute が引数として渡されている場合、element の属性を設定する
  if (attributeArray !== undefined)
  {
    for (var [name, value] of Object.entries(attributeArray))
    {
      element.setAttribute(name, value);
    }
  }

  return element;
}