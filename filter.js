/**
 * @description 产品、新闻等审核状态
 * @method state
 * @author wyj on 14;5/28
 * @example
 * <td data-title="'State'">{{product.state | state}}</td>
 */
app.filter('state', function () {
    var stateFilter = function (input) {
        switch (input) {
            case '01':
                return '已发布';
            case '00':
                return '未发布';
            default:
                return '审核未通过';
        }
    };
    return stateFilter;
})
/**
 * @description 字符串截取
 * @method characters
 * @author wyj on 14;5/21
 * @example
 * <a ng-if="!product.$edit"  href="javascript:;" ng-click="product_view(product)" style="color:#333;">{{product.name | characters:25}}</a>
 */
app.filter('characters', function () {
    return function (input, chars, breakOnWord) {
        if (isNaN(chars)) return input;
        if (chars <= 0) return '';
        if (input && input.length > chars) {
            input = input.substring(0, chars);
            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                //get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            } else {
                while (input.charAt(input.length - 1) === ' ') {
                    input = input.substr(0, input.length - 1);
                }
            }
            return input + '...';
        }
        return input;
    };
});