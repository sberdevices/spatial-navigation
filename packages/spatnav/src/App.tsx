import React, { useState } from 'react';
import './App.css';
import './spatnav/spatnav';

// const cx = (...classNames: Array<string | null | void | boolean>) => {
//     return classNames.filter(Boolean).join(' ');
// };

export default function App() {
    const [items, setItems] = useState(() => {
        const arr = [2, 6, 4, 2, 3];
        return arr.map((count, id) => {
            return {
                id: (id + 1).toString(),
                count,
            };
        });
    });

    return (
        <div>
            {items.map(({ count, id }, i) => {
                const setState = (inc: 1 | -1) => {
                    setItems((items) => {
                        return items.reduce((arr: typeof items, item, ii) => {
                            if (i === ii) {
                                const nextCount = item.count + inc;
                                if (nextCount > 0) {
                                    arr.push({
                                        ...item,
                                        count: nextCount,
                                    });
                                }
                            } else {
                                arr.push(item);
                            }
                            return arr;
                        }, []);
                    });
                };

                return (
                    <div
                        key={id}
                        style={{
                            margin: 30,
                            fontSize: 60,
                        }}
                    >
                        Item #{id}{' '}
                        <button
                            style={{
                                fontSize: 60,
                            }}
                            onClick={() => setState(-1)}
                        >
                            -
                        </button>{' '}
                        {count}{' '}
                        <button
                            style={{
                                fontSize: 60,
                            }}
                            onClick={() => setState(1)}
                        >
                            +
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
