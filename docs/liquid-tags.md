# Liquid tags


## content_for
The `content_for` tag requires a type parameter to differentiate between rendering a number of theme blocks (`'blocks'`) and a single static block (`'block'`).


Syntax:
```
{% content_for 'blocks' %}
{% content_for 'block', type: "slide", id: "slide-1" %}
```

## form
Because there are many different form types available in Shopify themes, the `form` tag requires a type. Depending on the
form type, an additional parameter might be required. You can specify the following form types:

- [`activate_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)
- [`cart`](https://shopify.dev/docs/api/liquid/tags/form#form-cart)
- [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
- [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
- [`currency`](https://shopify.dev/docs/api/liquid/tags/form#form-currency)
- [`customer`](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
- [`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)
- [`customer_login`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
- [`guest_login`](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)
- [`localization`](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
- [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
- [`product`](https://shopify.dev/docs/api/liquid/tags/form#form-product)
- [`recover_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
- [`reset_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)
- [`storefront_password`](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)


Syntax:
```
{% form 'form_type' %}
  content
{% endform %}
```

## layout

Syntax:
```
{% layout name %}
```

## assign
You can create variables of any [basic type](https://shopify.dev/docs/api/liquid/basics#types), [object](https://shopify.dev/docs/api/liquid/objects), or object property.

> Caution:
> Predefined Liquid objects can be overridden by variables with the same name.
> To make sure that you can access all Liquid objects, make sure that your variable name doesn't match a predefined object's name.


Syntax:
```
{% assign variable_name = value %}
```

## break

Syntax:
```
{% break %}
```

## capture
You can create complex strings with Liquid logic and variables.

> Caution:
> Predefined Liquid objects can be overridden by variables with the same name.
> To make sure that you can access all Liquid objects, make sure that your variable name doesn't match a predefined object's name.


Syntax:
```
{% capture variable %}
  value
{% endcapture %}
```

## case

Syntax:
```
{% case variable %}
  {% when first_value %}
    first_expression
  {% when second_value %}
    second_expression
  {% else %}
    third_expression
{% endcase %}
```

## comment
Any text inside `comment` tags won't be output, and any Liquid code will be parsed, but not executed.


Syntax:
```
{% comment %}
  content
{% endcomment %}
```

## continue

Syntax:
```
{% continue %}
```

## cycle
The `cycle` tag must be used inside a `for` loop.

> Tip:
> Use the `cycle` tag to output text in a predictable pattern. For example, to apply odd/even classes to rows in a table.


Syntax:
```
{% cycle string, string, ... %}
```

## decrement
Variables that are declared with `decrement` are unique to the [layout](/themes/architecture/layouts), [template](/themes/architecture/templates),
or [section](/themes/architecture/sections) file that they're created in. However, the variable is shared across
[snippets](/themes/architecture/snippets) included in the file.

Similarly, variables that are created with `decrement` are independent from those created with [`assign`](https://shopify.dev/docs/api/liquid/tags/assign)
and [`capture`](https://shopify.dev/docs/api/liquid/tags/capture). However, `decrement` and [`increment`](https://shopify.dev/docs/api/liquid/tags/increment) share
variables.


Syntax:
```
{% decrement variable_name %}
```

## doc
The `doc` tag allows developers to include documentation within Liquid
templates. Any content inside `doc` tags is not rendered or outputted.
Liquid code inside will be parsed but not executed. This facilitates
tooling support for features like code completion, linting, and inline
documentation.

For detailed documentation syntax and examples, see the
[`LiquidDoc` reference](https://shopify.dev/docs/storefronts/themes/tools/liquid-doc).


Syntax:
```
{% doc %}
  Renders a message.

  @param {string} foo - A string value.
  @param {string} [bar] - An optional string value.

  @example
  {% render 'message', foo: 'Hello', bar: 'World' %}
{% enddoc %}
```

## echo
Using the `echo` tag is the same as wrapping an expression in curly brackets (`{{` and `}}`). However, unlike the curly
bracket method, you can use the `echo` tag inside [`liquid` tags](https://shopify.dev/docs/api/liquid/tags/liquid).

> Tip:
> You can use [filters](https://shopify.dev/docs/api/liquid/filters) on expressions inside `echo` tags.


Syntax:
```
{% liquid
  echo expression
%}
```

## for
You can do a maximum of 50 iterations with a `for` loop. If you need to iterate over more than 50 items, then use the
[`paginate` tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.

> Tip:
> Every `for` loop has an associated [`forloop` object](https://shopify.dev/docs/api/liquid/objects/forloop) with information about the loop.


Syntax:
```
{% for variable in array %}
  expression
{% endfor %}
```

## if

Syntax:
```
{% if condition %}
  expression
{% endif %}
```

## increment
Variables that are declared with `increment` are unique to the [layout](/themes/architecture/layouts), [template](/themes/architecture/templates),
or [section](/themes/architecture/sections) file that they're created in. However, the variable is shared across
[snippets](/themes/architecture/snippets) included in the file.

Similarly, variables that are created with `increment` are independent from those created with [`assign`](https://shopify.dev/docs/api/liquid/tags/assign)
and [`capture`](https://shopify.dev/docs/api/liquid/tags/capture). However, `increment` and [`decrement`](https://shopify.dev/docs/api/liquid/tags/decrement) share
variables.


Syntax:
```
{% increment variable_name %}
```

## raw

Syntax:
```
{% raw %}
  expression
{% endraw %}
```

## render
Inside snippets and app blocks, you can't directly access variables that are [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside
of the snippet or app block. However, you can [specify variables as parameters](https://shopify.dev/docs/api/liquid/tags/render#render-passing-variables-to-a-snippet)
to pass outside variables to snippets.

While you can't directly access created variables, you can access global objects, as well as any objects that are
directly accessible outside the snippet or app block. For example, a snippet or app block inside the [product template](/themes/architecture/templates/product)
can access the [`product` object](https://shopify.dev/docs/api/liquid/objects/product), and a snippet or app block inside a [section](/themes/architecture/sections)
can access the [`section` object](https://shopify.dev/docs/api/liquid/objects/section).

Outside a snippet or app block, you can't access variables created inside the snippet or app block.

> Note:
> When you render a snippet using the `render` tag, you can't use the [`include` tag](https://shopify.dev/docs/api/liquid/tags/include)
> inside the snippet.


Syntax:
```
{% render 'filename' %}
```

## tablerow
The `tablerow` tag must be wrapped in HTML `<table>` and `</table>` tags.

> Tip:
> Every `tablerow` loop has an associated [`tablerowloop` object](https://shopify.dev/docs/api/liquid/objects/tablerowloop) with information about the loop.


Syntax:
```
{% tablerow variable in array %}
  expression
{% endtablerow %}
```

## unless
> Tip:
> Similar to the [`if` tag](https://shopify.dev/docs/api/liquid/tags/if), you can use `elsif` to add more conditions to an `unless` tag.


Syntax:
```
{% unless condition %}
  expression
{% endunless %}
```

## paginate
Because [`for` loops](https://shopify.dev/docs/api/liquid/tags/for) are limited to 50 iterations per page, you need to use the `paginate` tag to
iterate over an array that has more than 50 items. The following arrays can be paginated:

- [`article.comments`](https://shopify.dev/docs/api/liquid/objects/article#article-comments)
- [`blog.articles`](https://shopify.dev/docs/api/liquid/objects/blog#blog-articles)
- [`collections`](https://shopify.dev/docs/api/liquid/objects/collections)
- [`collection.products`](https://shopify.dev/docs/api/liquid/objects/collection#collection-products)
- [`customer.addresses`](https://shopify.dev/docs/api/liquid/objects/customer#customer-addresses)
- [`customer.orders`](https://shopify.dev/docs/api/liquid/objects/customer#customer-orders)
- [`metaobject_definition.values`](https://shopify.dev/docs/api/liquid/objects/metaobject_definition#metaobject_definition-values)
- [`pages`](https://shopify.dev/docs/api/liquid/objects/pages)
- [`product.variants`](https://shopify.dev/docs/api/liquid/objects/product#variants)
- [`search.results`](https://shopify.dev/docs/api/liquid/objects/search#search-results)
- [`article_list` settings](/themes/architecture/settings/input-settings#article_list)
- [`collection_list` settings](/themes/architecture/settings/input-settings#collection_list)
- [`product_list` settings](/themes/architecture/settings/input-settings#product_list)

Within the `paginate` tag, you have access to the [`paginate` object](https://shopify.dev/docs/api/liquid/objects/paginate). You can use this
object, or the [`default_pagination` filter](https://shopify.dev/docs/api/liquid/filters/default_pagination), to build page navigation.

> Note:
> The `paginate` tag allows the user to paginate to the 25,000th item in the array and no further. To reach items further in
> the array the array should be filtered further before paginating. See
> [Pagination Limits](/themes/best-practices/performance/platform#pagination-limits) for more information.


Syntax:
```
{% paginate array by page_size %}
  {% for item in array %}
    forloop_content
  {% endfor %}
{% endpaginate %}
```

## javascript
Each section, block or snippet can have only one `{% javascript %}` tag.

To learn more about how JavaScript that's defined between the `javascript` tags is loaded and run, refer to the documentation for [javascript tags](/storefronts/themes/best-practices/javascript-and-stylesheet-tags#javascript).
> Caution:
> Liquid isn't rendered inside of `{% javascript %}` tags. Including Liquid code can cause syntax errors.


Syntax:
```
{% javascript %}
  javascript_code
{% endjavascript %}
```

## section
Rendering a section with the `section` tag renders a section statically. To learn more about sections and how to use
them in your theme, refer to [Render a section](/themes/architecture/sections#render-a-section).


Syntax:
```
{% section 'name' %}
```

## stylesheet
Each section, block or snippet can have only one `{% stylesheet %}` tag.

To learn more about how CSS that's defined between the `stylesheet` tags is loaded and run, refer to the documentation for [stylesheet tags](/storefronts/themes/best-practices/javascript-and-stylesheet-tags#stylesheet).
> Caution:
> Liquid isn't rendered inside of `{% stylesheet %}` tags. Including Liquid code can cause syntax errors.


Syntax:
```
{% stylesheet %}
  css_styles
{% endstylesheet %}
```

## sections
Use this tag to render section groups as part of the theme's [layout](/themes/architecture/layouts) content. Place the `sections` tag where you want to render it in the layout.

To learn more about section groups and how to use them in your theme, refer to [Section groups](/themes/architecture/section-groups#usage).


Syntax:
```
{% sections 'name' %}
```

## style
> Note:
> If you reference [color settings](/themes/architecture/settings/input-settings#color) inside `style` tags, then
> the associated CSS rules will update as the setting is changed in the theme editor, without a page refresh.


Syntax:
```
{% style %}
  CSS_rules
{% endstyle %}
```

## else
You can use the `else` tag with the following tags:

- [`case`](https://shopify.dev/docs/api/liquid/tags/case)
- [`if`](https://shopify.dev/docs/api/liquid/tags/if)
- [`unless`](https://shopify.dev/docs/api/liquid/tags/unless)


Syntax:
```
{% else %}
  expression
```

## else

Syntax:
```
{% for variable in array %}
  first_expression
{% else %}
  second_expression
{% endfor %}
```

## liquid
Because the tags don't have delimeters, each tag needs to be on its own line.

> Tip:
> Use the [`echo` tag](https://shopify.dev/docs/api/liquid/tags/echo) to output an expression inside `liquid` tags.


Syntax:
```
{% liquid
  expression
%}
```

---

← Back to the [theme development guide](README.md)
