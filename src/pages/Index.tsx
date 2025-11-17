import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Офисная мебель',
    category: 'Офис',
    description: 'Качественная мебель для офисных помещений',
    price: 'от 15 000 ₽',
    inStock: true
  },
  {
    id: 2,
    name: 'Компьютерная техника',
    category: 'Техника',
    description: 'Современное оборудование для бизнеса',
    price: 'от 25 000 ₽',
    inStock: true
  },
  {
    id: 3,
    name: 'Расходные материалы',
    category: 'Материалы',
    description: 'Бумага, картриджи и канцелярия',
    price: 'от 500 ₽',
    inStock: true
  },
  {
    id: 4,
    name: 'Системы хранения',
    category: 'Офис',
    description: 'Шкафы, стеллажи и архивные системы',
    price: 'от 8 000 ₽',
    inStock: true
  },
  {
    id: 5,
    name: 'Сетевое оборудование',
    category: 'Техника',
    description: 'Роутеры, коммутаторы, кабели',
    price: 'от 3 500 ₽',
    inStock: false
  },
  {
    id: 6,
    name: 'Офисная электроника',
    category: 'Техника',
    description: 'Принтеры, сканеры, МФУ',
    price: 'от 12 000 ₽',
    inStock: true
  }
];

const categories = ['Все', 'Офис', 'Техника', 'Материалы'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={28} className="text-accent" />
              <span className="text-xl font-bold text-primary">ЛЕНОКС</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О компании</a>
              <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
              <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Надежный партнер с 2010 года</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Комплексные поставки для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Широкий ассортимент товаров для офиса и производства. 
              Индивидуальный подход к каждому клиенту и выгодные условия сотрудничества.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="FileText" size={20} />
                Скачать прайс-лист
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="ArrowRight" size={20} />
                Смотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на комплексном обеспечении предприятий всем необходимым
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={24} className="text-accent" />
                </div>
                <CardTitle>15+ лет опыта</CardTitle>
                <CardDescription>
                  Успешно работаем на рынке с 2010 года
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <CardTitle>500+ клиентов</CardTitle>
                <CardDescription>
                  Доверяют нам свои поставки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-accent" />
                </div>
                <CardTitle>Доставка 24/7</CardTitle>
                <CardDescription>
                  По всей России в удобное время
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Каталог товаров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите категорию для просмотра ассортимента
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={product.inStock ? "default" : "secondary"}>
                      {product.inStock ? 'В наличии' : 'Под заказ'}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Icon name="Download" size={20} />
              Полный прайс-лист (PDF)
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Адрес офиса</p>
                      <p className="text-muted-foreground">г. Москва, ул. Деловая, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@lenoks.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Отправить запрос</CardTitle>
                <CardDescription>Мы ответим в течение часа</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={24} className="text-accent" />
              <span className="font-bold text-primary">ЛЕНОКС</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ЛЕНОКС. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}