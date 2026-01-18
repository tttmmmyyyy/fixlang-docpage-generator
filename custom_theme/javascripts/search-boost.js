// カスタム検索スコアリング: 完全一致するセクション名を優先
document$.subscribe(function () {
    // 検索入力を監視
    var searchInput = document.querySelector('.md-search__input');
    if (!searchInput) return;

    var logCount = 0;
    var maxLogs = 1;  // 最初の1回だけログを出力
    var lastQuery = '';
    var processing = false;

    // 検索結果を再スコアリングする関数
    function boostExactMatches(query) {
        if (!query || query.length < 2) return;
        if (processing) return;  // 処理中なら何もしない
        if (query === lastQuery && logCount >= maxLogs) return;  // 同じクエリで既にログ出力済みなら何もしない

        processing = true;
        lastQuery = query;
        processing = true;
        lastQuery = query;

        setTimeout(function () {
            // まず、すべてのdetails要素を展開
            var detailsElements = document.querySelectorAll('.md-search-result__more');
            detailsElements.forEach(function (details) {
                details.open = true;
                // detailsを非表示にして、中身だけ表示
                details.style.display = 'contents';
            });

            // 検索結果のリンクを取得（details内も含む）
            var results = document.querySelectorAll('.md-search-result__link');
            var resultsArray = Array.from(results);
            var normalizedQuery = query.toLowerCase().trim();

            var shouldLog = logCount < maxLogs;

            if (shouldLog) {
                console.log('=== SEARCH DEBUG INFO ===');
                console.log('Search query:', normalizedQuery);
                console.log('Number of results:', resultsArray.length);
            }

            if (resultsArray.length > 0 && shouldLog) {
                console.log('First result HTML:', resultsArray[0].outerHTML.substring(0, 500));
                logCount++;
            }

            // スコアと共に結果を保存
            var scoredResults = resultsArray.map(function (result, index) {
                // h2（セクション名）またはh1（ページ名）を取得
                var titleElement = result.querySelector('h2') || result.querySelector('h1');
                var article = result.querySelector('.md-search-result__article') || result;
                var article = result.querySelector('.md-search-result__article') ||
                    result.querySelector('article') ||
                    result;
                var article = result.querySelector('.md-search-result__article') || result;

                if (!titleElement) {
                    if (shouldLog) console.log('Result', index, 'has no title element');
                    return { result: result, score: 0, title: 'NO TITLE' };
                }

                // 大文字小文字を区別せずに比較
                var titleText = titleElement.textContent.trim();
                var titleTextLower = titleText.toLowerCase();
                var isSection = titleElement.tagName === 'H2';  // h2はセクション、h1はページ名
                var score = 0;

                if (index < 3 && shouldLog) {
                    console.log('Result', index, '- Tag:', titleElement.tagName, 'Title:', titleText, 'Lower:', titleTextLower);
                }

                // 完全一致の場合、最高スコア
                if (titleTextLower === normalizedQuery) {
                    score = 10000;
                    if (isSection) score += 5000;  // セクション名の完全一致はさらに優先
                    if (article) article.setAttribute('data-exact-match', 'true');
                    if (shouldLog && index < 3) console.log('  -> Exact match! Score:', score);
                }
                // 検索語で始まる場合
                else if (titleTextLower.startsWith(normalizedQuery)) {
                    score = 5000;
                    if (isSection) score += 2000;  // セクション名の前方一致も優先
                    if (article) article.setAttribute('data-prefix-match', 'true');
                    if (shouldLog && index < 3) console.log('  -> Prefix match! Score:', score);
                }
                // 検索語が含まれる場合
                else if (titleTextLower.includes(normalizedQuery)) {
                    score = 500;
                    if (isSection) score += 200;
                    if (shouldLog && index < 3) console.log('  -> Contains query! Score:', score);
                }
                // それ以外はデフォルトスコア（本文マッチなど）
                else {
                    score = 10;
                }

                return { result: result, score: score, title: titleText };
            });

            // スコアで降順ソート
            scoredResults.sort(function (a, b) {
                return b.score - a.score;
            });

            if (shouldLog) {
                console.log('Sorted results (top 5):');
                scoredResults.slice(0, 5).forEach(function (item, idx) {
                    console.log('  ' + (idx + 1) + '. "' + item.title + '" - Score: ' + item.score);
                });
                console.log('=== END DEBUG INFO ===');
            }

            // 結果を完全に並び替える
            var mainResultsList = document.querySelector('.md-search-result__list');
            if (!mainResultsList) {
                processing = false;
                return;
            }

            // 既存のすべての子要素を削除
            while (mainResultsList.firstChild) {
                mainResultsList.removeChild(mainResultsList.firstChild);
            }

            // スコア順にソート済みの結果を追加
            scoredResults.forEach(function (item) {
                mainResultsList.appendChild(item.result);
            });

            processing = false;
        }, 200);
    }

    // 検索結果が更新されたときに実行
    var observer = new MutationObserver(function (mutations) {
        var query = searchInput.value;
        if (query) {
            boostExactMatches(query);
        }
    });

    var searchResults = document.querySelector('.md-search-result');
    if (searchResults) {
        observer.observe(searchResults, {
            childList: true,
            subtree: true
        });
    }

    // 入力時にも実行
    searchInput.addEventListener('input', function () {
        var query = searchInput.value;
        if (query) {
            boostExactMatches(query);
        }
    });
});
